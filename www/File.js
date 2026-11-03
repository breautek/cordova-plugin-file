/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

const modulemapper = require('cordova/modulemapper');
const NativeFile = modulemapper.getOriginalSymbol(window, 'File');
const CordovaFile = require('./CordovaFile');

/**
 * File factory that either behaves as a Cordova File or the standard W3C file
 * depending on the given arguments.
 * 
 * A CordovaFile is not a W3C blob or file and is not interchangeable. What this
 * factory function does is return a CordovaFile when the arguments are CordovaFile-like,
 * otherwise it returns the standard W3C file object.
 * 
 * Instantiation uses Reflect to proxy the API to the corresponding API
 * which retains inheritance chains on the returned instance.
 */
function File(...args) {
    if (!new.target) {
        throw new TypeError("Constructing a File requires the new operator.");
    }
    
    // the first parameter of a CordovaFile is expected to be a string,
    // while the first parameter of a W3C file is an array of bits/blobs/other files, etc.
    const isW3C = args.length > 0 && args[0] !== null && typeof args[0] === 'object';
    
    
    if (isW3C) {
        return Reflect.construct(NativeFile, args, new.target === File ? NativeFile : new.target);
    }
    else {
        return Reflect.construct(CordovaFile, args, new.target === File ? CordovaFile : new.target);
    }
}

// Make the File prototype pretend it's the W3C File for the purposes of `instanceof` checks.
File.prototype = NativeFile.prototype;

// This allows both a CordovaFile instance or a W3C file instance to return true
// when using x instanceof File
Object.defineProperty(File, Symbol.hasInstance, {
    value: (o) => o instanceof NativeFile || o instanceof CordovaFile
});
