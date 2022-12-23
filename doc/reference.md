<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

API Reference
-------------------------------------

This documentation outlines an API reference of this plugin. This documentation is meant to be concise. For a more "guide" style documentation, see the [README](../README.md).

As with all plugins, the following API is only available after the `deviceready` event has fired. Failure to wait for `deviceready` will likely result in `null` references.

Note that while this documentation uses TypeScript syle notation, these types may not actually exists in the TypeScript type definitions. The type references are used purely to express expected types for the purposes of authoring this documentation.

# Table of Contents

- [1.0.0 Constants](#100-constants)
- - [1.1.0 Internal Storage](#110-internal-storage)
- - - [1.1.1 applicationStorageDirectory](#101-applicationstoragedirectory)
- - - [1.1.2 applicationDirectory](#112-applicationdirectory)
- - - [1.1.3 dataDirectory](#113-datadirectory)
- - - [1.1.4 cacheDirectory](#114-cachedirectory)
- - - [1.1.5 tempDirectory](#115-tempdirectory)
- - - [1.1.6 syncedDataDirectory](#116-synceddatadirectory)
- - - [1.1.7 documentsDirectory](#117-documentsdirectory)
- - [1.2.0 External Storage](#120-external-storage)
- - - [1.2.1 externalRootDirectory](#121-externalrootdirectory)
- - - [1.2.2 externalApplicationStorageDirectory](#122-externalapplicationstoragedirectory)
- - - [1.2.3 externalDataDirectory](#123-externaldatadirectory)
- - - [1.2.4 externalCacheDirectory](#124-externalcachedirectory)
- - [1.3.0 File System Constants](#130-file-system-constants)
- - - [1.3.1 PERSISTENT](#131-persistent)
- - - [1.3.2 TEMPORARY](#132-temporary)
- [2.0.0 FileError](#200-fileerror)
- - - [2.0.1 NOT_FOUND_ERR](#201-notfounderr)
- - - [2.0.2 SECURITY_ERR](#202-securityerr)
- - - [2.0.3 ABORT_ERR](#203-aborterr)
- - - [2.0.4 NOT_READABLE_ERR](#204-notreadableerr)
- - - [2.0.5 ENCODING_ERR](#205-encodingerr)
- - - [2.0.6 NO_MODIFICATION_ALLOWED_ERR](#206-nomodificationallowederr)
- - - [2.0.7 INVALID_STATE_ERR](#207-invalidstateerr)
- - - [2.0.8 SYNTAX_ERR](#208-syntaxerr)
- - - [2.0.9 INVALID_MODIFICATION_ERR](#209-invalidmodificationerr)
- - - [2.0.10 QUOTA_EXCEEDED_ERR](#2010-quotaexceedederr)
- - - [2.0.11 TYPE_MISMATCH_ERR](#2011-typemismatcherr)
- - - [2.0.12 PATH_EXISTS_ERR](#2012-pathexistserr)
- [3.0.0 File System API](#300-file-system-api)
- - [3.1.0 LocalFileSystem](#310-localfilesystem)
- - - [3.1.1 PERSISTENT](#311-persistent)
- - - [3.1.2 TEMPORARY](#312-temporary)
- - [3.2.0 requestFileSystem](#320-requestfilesystem)
- [4.0.0 FileSystem](#400-filesystem)
- - [4.1.0 FileSystem Properties](#410-filesystem-properties)
- - - [4.1.1 name](#411-name)
- - - [4.1.2 root](#412-root)
- [5.0.0 DirectoryEntry](#500-directoryentry)
- - [5.1.0 DirectoryEntry Properties](#510-directoryentry-properties)
- - - [5.1.1 filesystem](#511-filesystem)
- - - [5.1.2 fullPath](#512-fullpath)
- - - [5.1.3 isDirectory](#513-isdirectory)
- - - [5.1.4 isFile](#514-isfile)
- - - [5.1.5 name](#515-name)
- - - [5.1.6 nativeURL](#516-nativeurl)
- - [5.2.0 DirectoryEntry Methods](#520-directoryentry-methods)
- - - [5.2.1 createReader](#521-createreader)
- - - [5.2.2 getDirectory](#522-getdirectory)
- - - [5.2.3 getFile](#523-getfile)
- - - [5.2.4 removeRecursively](#524-removerecursively)
- - [5.3.0 DirectoryReader](#530-directoryreader)
- - - [5.3.1 hasReadEntries](#531-hasreadentries)
- - - [5.3.2 localURL](#532-localurl)
- - - [5.3.3 readEntries](#533-readentries)
- [6.0.0 FileEntry](#600-fileentry)
- - [6.1.0 FileEntry Properties](#610-fileentry-properties)
- - - [6.1.1 filesystem](#611-filesystem)
- - - [6.1.2 fullPath](#612-fullpath)
- - - [6.1.3 isDirectory](#613-isdirectory)
- - - [6.1.4 isFile](#614-isfile)
- - - [6.1.5 name](#615-name)
- - - [6.1.6 nativeURL](#616-nativeurl)
- - [6.2.0 FileEntry Methods](#620-fileentry-methods)
- - - [6.2.1 createWriter](#621-createwriter)
- - - [6.2.2 file](#622-file)
- - [6.3.0 FileWriter](#630-filewriter)
- - - [6.3.1 localURL](#631-localurl)
- - - [6.3.2 length](#632-length)
- - - [6.3.3 position](#633-position)
- - - [6.3.4 onabort](#634-onabort)
- - - [6.3.5 onerror](#635-onerror)
- - - [6.3.6 onprogress](#636-onprogress)
- - - [6.3.7 onwritestart](#637-onwritestart)
- - - [6.3.8 onwrite](#638-onwrite)
- - - [6.3.9 onwriteend](#639-onwriteend)
- - - [6.3.10 readyState](#6310-readystate)
- - - [6.3.11 error](#6311-error)
- - - [6.3.12 abort](#6312-abort)
- - - [6.3.13 write](#6313-write)
- - - [6.3.14 seek](#6314-seek)
- - - [6.3.15 truncate](#6315-truncate)
- - [6.4.0 Writer Ready State](#640-writer-ready-state)
- - - [6.4.1 INIT](#641-init)
- - - [6.4.2 WRITING](#642-writing)
- - - [6.4.3 DONE](#643-done)
- - [6.5.0 Progress Event](#650-progress-event)
- - - [6.5.1 type](#651-type)
- - - [6.5.2 target](#652-target)
- - - [6.5.3 loaded](#653-loaded)
- - - [6.5.4 total](#654-total)
- - [6.6.0 File](#660-file)
- - - [6.6.1 name](#661-name)
- - - [6.6.2 localURL](#662-localurl)
- - - [6.6.3 type](#663-type)
- - - [6.6.4 lastModified](#664-lastmodified)
- - - [6.6.5 size](#665-size)
- - - [6.6.6 start](#666-start)
- - - [6.6.7 end](#667-end)
- - - [6.6.8 slice](#668-slice)
- - [6.7.0 FileReader](#670-filereader) 
- - - [6.7.1 constructor](#671-constructor)
- - - [6.7.2 READ_CHUNK_SIZE](#672-readchunksize)
- - - [6.7.3 onloadstart](#673-onloadstart)
- - - [6.7.4 onload](#674-onload)
- - - [6.7.5 onloadend](#675-onloadend)
- - - [6.7.6 onprogress](#676-onprogress)
- - - [6.7.7 onerror](#677-onerror)
- - - [6.7.8 onabort](#678-onabort)
- - - [6.7.9 readyState](#679-readystate)
- - - [6.7.10 error](#6710-error)
- - - [6.7.11 result](#6711-result)
- - - [6.7.12 abort](#6712-abort)
- - - [6.7.13 readAsText](#6713-readastext)
- - - [6.7.14 readAsDataURL](#6714-readasdataurl)
- - - [6.7.15 readAsBinaryString](#6715-readasbinarystring)
- - - [6.7.16 readAsArrayBuffer](#6716-readasarraybuffer)
- - [6.8.0 Reader Ready States](#680-reader-ready-states)
- - - [6.8.1 EMPTY](#681-empty)
- - - [6.8.2 LOADING](#682-loading)
- - - [6.8.3 DONE](#683-done)


## 1.0.0 Constants

There are several constants available of common paths that can be used as a relative base point. These paths are platform dependent, so they should not be saved in permanent storage.

The constants are all under `cordova.file` namespace.

### 1.1.0 Internal Storage

Internal storage is a non-removable storage medium on the device.

#### 1.1.1 applicationStorageDirectory

Read-only directory where the application is installed. On iOS, this is the root directory of the app's sandbox.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">


##### Signature

```typescript
cordova.file.applicationStorageDirectory: string
```

#### 1.1.2 applicationDirectory

Read-only directory where the application is installed. On iOS, this is the directory that contains the application bundle. On Android, this is the directory that contains the app's assets.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.applicationDirectory: string
```

#### 1.1.3 dataDirectory

Persistent and private data storage within the app's sandbox.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.dataDirectory: string
```

#### 1.1.4 cacheDirectory

Private directory to store temporary or files that can be easily re-created. The OS may clear this directory if storage is low on apps not frequently in use. However, apps should clear files themselves if they are no longer useful.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.cacheDirectory: string
```

#### 1.1.5 tempDirectory

Temp directory that the OS can clear at will. Do not rely on the OS to clear this directory; your app should always remove files as applicable.

##### Supported Platforms

<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.tempDirectory: string
```

#### 1.1.6 syncedDataDirectory

Similar to [dataDirectory](#113-datadirectory) but this directory is potentially synced to the user's iCloud account.

##### Supported Platforms

<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.syncedDataDirectory: string
```

#### 1.1.7 documentsDirectory

Files private to the app, but are meaningful to other application (e.g. Office files).

##### Supported Platforms

<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.documentsDirectory: string
```

### 1.2.0 External Storage

External storage is a physical storage medium that can be removed from the device, such as an SD card.

On devices with no SD card, this storage medium is emulated.

External Storage is a Android-concept and does not apply to other platforms. External storage should only be used if the files are intended to be shared or exported from the app.

#### 1.2.1 externalRootDirectory

The root directory of the external storage medium. This is usually a read-only directory.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.externalRootDirectory: string
```

#### 1.2.2 externalApplicationStorageDirectory

Application space on external storage.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.externalApplicationStorageDirectory: string
```

#### 1.2.3 externalDataDirectory

App-specific data files on external storage.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.externalDataDirectory: string
```

#### 1.2.4 externalCacheDirectory

App cache on external storage.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">

##### Signature

```typescript
cordova.file.externalCacheDirectory: string
```

### 1.3.0 File System Constants

There are two file system constants that can be used with [requestFileSystem](#320-requestfilesystem). These are aliases to [LocalFileSystem](#310-localfilesystem).

#### 1.3.1 PERSISTENT

A constant to request the persistent file storage. Alias to [LocalFileSystem.PERSISTENT](#311-persistent). Available under the global namespace.

##### Signature

```typescript
window.PERSISTENT: number = 1
```

#### 1.3.2 TEMPORARY

A constant to request the temporary file storage. Alias to [LocalFileSystem.TEMPORARY](#312-temporary). Available under the global namespace.

##### Signature

```typescript
window.TEMPORARY: number = 0
```

# 2.0.0 FileError

An object that contains constants of error codes that file APIs may return. The `FileError` object can be found in the global namespace.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">

##### Signature

```typescript
FileError: Object
```

#### 2.0.1 NOT_FOUND_ERR

An error indicating the requested file is not present on disk. On Android, this error can return on external storage if the application does not visibility of the requested file, even if the file actually exists.

##### Signature

```typescript
FileError.NOT_FOUND_ERROR: number = 1
```

#### 2.0.2 SECURITY_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.SECURITY_ERR: number = 2
```

#### 2.0.3 ABORT_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.ABORT_ERR: number = 3
```

#### 2.0.4 NOT_READABLE_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.NOT_READABLE_ERR: number = 4
```

#### 2.0.5 ENCODING_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.ENCODING_ERR: number = 5
```

#### 2.0.6 NO_MODIFICATION_ALLOWED_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.NO_MODIFICATION_ALLOWED_ERR: number = 6
```

#### 2.0.7 INVALID_STATE_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.INVALID_STATE_ERR: number = 7
```

#### 2.0.8 SYNTAX_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.SYNTAX_ERR: number = 8
```

#### 2.0.9 INVALID_MODIFICATION_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.INVALID_MODIFICATION_ERR: number = 9
```

#### 2.0.10 QUOTA_EXCEEDED_ERR

Raised when the app's disk usage has exceeded the quota policy.

##### Signature

```typescript
FileError.QUOTA_EXCEEDED_ERR: number = 10
```

#### 2.0.11 TYPE_MISMATCH_ERR

TBD - TODO: _Document how/when this error is generally raised._

##### Signature

```typescript
FileError.TYPE_MISMATCH_ERR: number = 11
```

#### 2.0.12 PATH_EXISTS_ERR

Raised when a directory or file already exists while attempting to create it.

##### Signature

```typescript
FileError.PATH_EXISTS_ERR: number = 12
```


## 3.0.0 File System API

### 3.1.0 LocalFileSystem

An API to retrieve the local file system directory for persistent or temporary storage.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">


##### Signature

```typescript
window.LocalFileSystem: Object
```

#### 3.1.1 PERSISTENT

A constant to request the persistent storage directory.

```typescript
LocalFileSystem.PERSISTENT: number = 0
```

#### 3.1.2 TEMPORARY

A constant to request the temporary storage directory.

```typescript
LocalFileSystem.TEMPORARY: number = 1
```

### 3.2.0 requestFileSystem

Requests a filesystem to use, either `PERSISTENT` or `TEMPORARY`. This method is available in the global namespace.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">


##### Signature

```typescript
window.requestFileSystem: (
    filesystem: LocalFileSystem,
    size: number,
    successCallback: (filesystem: FileSystem) => void,
    errorCallback: (error: FileError) => void
) => void;
```

## 4.0.0 FileSystem

An object that describes a file system. Obtainable via [requestFileSystem](#320-requestfilesystem).

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">


##### Signature

```typescript
FileSystem: Object
```

### 4.1.0 FileSystem Properties

This section outlines the properties available on [FileSystem](#400-filesystem) instances.

#### 4.1.1 name

The name of the filesystem.

##### Signature

```typescript
FileSystem.name: string
```

#### 4.1.2 root

Gets the root [directory](#500-directoryentry) of the filesystem.

##### Signature

```typescript
FileSystem.name: DirectoryEntry
```

## 5.0.0 DirectoryEntry

An object that represents a directory on the filesystem.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">


##### Signature

```typescript
DirectoryEntry: Object
```

### 5.1.0 DirectoryEntry Properties

This section describes the properties of a [DirectoryEntry](#500-directoryentry) instance.

#### 5.1.1 filesystem

The [FileSystem](#400-filesystem) that this directory belongs to.

##### Signature

```typescript
DirectoryEntry.filesystem: FileSystem
```

#### 5.1.2 fullPath

The full native path to the directory, relative to the filesystem [root](#412-root).

##### Signature

```typescript
DirectoryEntry.fullPath: string
```

#### 5.1.3 isDirectory

A boolean that wil return true if this `Entry` is a directory.

##### Signature

```typescript
DirectoryEntry.isDirectory: boolean
```

#### 5.1.4 isFile

A boolean that wil return true if this `Entry` is a file.

##### Signature

```typescript
DirectoryEntry.isFile: boolean
```

#### 5.1.5 name

The name of the directory. Root directories will have an empty name.

##### Signature

```typescript
DirectoryEntry.name: string
```

#### 5.1.6 nativeURL

A `file:` schemed url containing the local native path to the `Entry` object.

##### Signature

```typescript
DirectoryEntry.nativeURL: string
```

### 5.2.0 DirectoryEntry Methods

This section describes the available methods on a [DirectoryEntry](#500-directoryentry) instance.

#### 5.2.1 createReader

Creates a [DirectoryReader](#530-directoryreader), for reading the directories and files that are in this directory.

##### Signature

```typescript
DirectoryEntry.createReader(): DirectoryReader
```

#### 5.2.2 getDirectory

Gets (and potentially creates) a [DirectoryEntry](#500-directoryentry) that is contained inside of this directory.

If `create` option is `true`, the directory will be created if it does not exists.

_TODO: Document the `exclusive` flag_

##### Signature

```typescript
DirectoryEntry.getDirectory(
    path: string,
    options: {
        create?: boolean;
        exclusive?: boolean;
    },
    successCallback: (directoryEntry: DirectoryEntry) => void,
    errorCallback: (error: FileError) => void
): void;
```

#### 5.2.3 getFile

Gets (and potentially creates) a [FileEntry](#600-fileentry) that is contained inside of this directory.

#### Signature

```typescript
DirectoryEntry.getFile(
    path: string,
    options: {
        create?: boolean;
        exclusive?: boolean;
    },
    successCallback: (fileEntry: FileEntry) => void,
    errorCallback: (error: FileError) => void
): void;
```

#### 5.2.4 removeRecursively

Removes this directory and all contained directories and files of this directory.

#### Signature

```typescript
DirectoryEntry.removeRecursively(
    successCallback: () => void,
    errorCallback: (error: FileError) => void;
): void;
```

### 5.3.0 DirectoryReader

This section describes the API of the `DirectoryReader`. Obtained by calling [createReader](#521-createreader) on a [DirectoryEntry](#500-directoryentry) instance.

##### Supported Platforms

<img src="./static/img/android.svg" height="22" width="22">
<img src="./static/img/ios.svg" height="22" width="22">

#### 5.3.1 hasReadEntries

This is an instance boolean property that will be `true` if this instance of [DirectoryReader](#530-directoryreader) has read the directory.

##### Signature

```typescript
DirectoryReader.hasReadEntries: boolean
```

#### 5.3.2 localURL

This is an instance string property that is a DOM-usable URL.

##### Signature

```typescript
DirectoryReader.localURL: string
```

#### 5.3.3 readEntries

This is an instance method to read the listing of this directory. The result array will be of either [DirectoryEntry](#500-directoryentry) or [FileEntry](#600-fileentry) instances.

##### Signature

```typescript
DirectoryReader.readEntries(
    successCallback: (entries: Array<Entry>) => void,
    errorCallback: (error: FileError) => void
): void;
```

## 6.0.0 FileEntry

This section describes the properties and methods of a `FileEntry` instance.

### 6.1.0 FileEntry Properties

This section describes the properties of a `FileEntry` instance.

#### 6.1.1 filesystem

The [FileSystem](#400-filesystem) that this file belongs to.

##### Signature

```typescript
FileEntry.filesystem: FileSystem
```

#### 6.1.2 fullPath

The full native path to the file, relative to the filesystem [root](#412-root).

##### Signature

```typescript
FileEntry.fullPath: string
```

#### 6.1.3 isDirectory

A boolean that wil return true if this `Entry` is a directory.

##### Signature

```typescript
FileEntry.isDirectory: boolean
```

#### 6.1.4 isFile

A boolean that wil return true if this `Entry` is a file.

##### Signature

```typescript
FileEntry.isFile: boolean
```

#### 6.1.5 name

The name of the file, including the extension if any.

##### Signature

```typescript
FileEntry.name: string
```

#### 6.1.6 nativeURL

A `file:` schemed url containing the local native path to the `Entry` object.

##### Signature

```typescript
FileEntry.nativeURL: string
```

### 6.2.0 FileEntry Methods

This section describes the available methods on a [FileEntry](#600-fileentry) instance.

#### 6.2.1 createWriter

Creates a [FileWriter](#630-filewriter) instance to write to the file.

##### Signature

```typescript
FileEntry.createWriter(
    successCallback: (writer: FileWriter) => void,
    errorCallback: (error: FileError) => void
): void
```

#### 6.2.2 file

Gets a [File](#640-file) instance.

##### Signature

```typescript
FileEntry.file(
    successCallback: (file: File) => void,
    errorCallback: (error: FileError) => void
): void
```

### 6.3.0 FileWriter

This section describes the properties and instance methods of a `FileWriter` object. Obtainable by calling [FileEntry.createWriter](#621-createwriter)

#### 6.3.1 localURL

An instance string property containing a DOM-usable URL.

##### Signature

```typescript
FileWriter.localURL: string;
```

#### 6.3.2 length

An instance number property containing the size of the file in bytes.

##### Signature

```typescript
FileWriter.length: number;
```

#### 6.3.3 position

The current byte position of the write cursor.

```typescript
FileWriter.position: number;
```

#### 6.3.4 onabort

The abort callback that will be invoked if the writer has been aborted. By default, this is `null`.

##### Signature

```typescript
FileWriter.onabort = null | () => void;
```

#### 6.3.5 onerror

The error callback that will be invoked if the writer has errored. By default, this is `null`.

##### Signature

```typescript
FileWriter.onerror = null | (error: FileError) => void;
```

#### 6.3.6 onprogress

The progress callback that will be invoked after every write chunk. By default, this is `null`.

_TODO: Find and document the actual callback parameters_

##### Signature

```typescript
FileWriter.onprogress = null | () => void;
```

#### 6.3.7 onwritestart

A callback that gets invoked on the initial write of every [write]() call.

##### Signature

```typescript
FileWriter.onwritestart = null | (event: ProgressEvent) => void;
```

#### 6.3.8 onwrite

A callback that gets invoked on every write chunk.

##### Signature

```typescript
FileWriter.onwrite = null | (event: ProgressEvent) => void;
```

#### 6.3.9 onwriteend

A callback that gets invoked after the last write chunk has been written.

##### Signature

```typescript
FileWriter.onwriteend = null | (event: ProgressEvent) => void;
```

#### 6.3.10 readyState

An instance property that defines the current [ReadyState](#640-writer-ready-state). This value will be updated during the [write](#6313-write) lifecycle.

##### Signature

```typescript
FileWriter.readyState: FileWriterReadyState
```

#### 6.3.11 error

An instance property that defines that the writer has encountered an error. If the property is `null`, then no error has occurred.

##### Signature

```typescript
FileWriter.error: null | FileError;
```

#### 6.3.12 abort

An instance method that aborts a write. Will raise an [INVALID_STATE_ERR](#207-invalidstateerr) if the writer is not writing. Otherwise it will set the writer to an [ABORT_ERR](#203-aborterr) state.

##### Signature

```typescript
FileWriter.abort(): void;
```

#### 6.3.13 write

An instance method that begins a write to a file. It is unsafe to call this method multiple times without waiting for the [onwriteend](#639-onwriteend) event.

##### Signature

```typescript
FileWriter.write(data: string | Blob | File | ArrayBuffer): void;
```

#### 6.3.14 seek

An instance method that seeks the position cursor to a given byte offset.

The `offset` parameter can be negative, in which cause it will seek relative to the end of the file.

If `offset` is greater than the file size, it will be clamped to the file size.

Calling `seek` while there is an active write will raise a [INVALID_STATE_ERR](#207-invalidstateerr)

##### Signature

```typescript
FileWriter.seek(offset: number): void;
```

#### 6.3.15 truncate

An instance method to truncate the file to the specified size.

Calling this while there is an active write will result in an [INVALID_STATE_ERR](#207-invalidstateerr) being raised.

##### Signature

```typescript
FileWriter.truncate(size: number): void;
```

### 6.4.0 Writer Ready State

This section describes the [FileWriter](#630-filewriter) ready states.

#### 6.4.1 INIT

A ready state that declares that this writer is still initializing.

##### Signature

```typescript
FileWriter.INIT: number = 0
```

#### 6.4.2 WRITING

A ready state that declares that this writer is currently writing.

##### Signature

```typescript
FileWriter.WRITING: number = 1
```

#### 6.4.3 DONE

A ready state that declares that this writer has finished writing.

##### Signature

```typescript
FileWriter.DONE: number = 2
```

### 6.5.0 Progress Event

An event object that encapsulates file IO progressions.

Note: This object while implements a similar API, is not the browser's [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) API.

#### 6.5.1 type

An event property that signals the different progression types, which includes:

- `writestart`
- `write`
- `writeend`
- `error`
- `loadstart`
- `load`
- `loadend`
- `progress`
- `abort`

##### Signature

```typescript
ProgressEvent.type: string
```

#### 6.5.2 target

The object that is firing the progress event. Generally this is a [FileWriter](#630-filewriter) or a [FileReader]().

##### Signature

```typescript
ProgressEvent.target: FileWriter | FileReader;
```

#### 6.5.3 loaded

The number of bytes that have been read so far.

##### Signature

```typescript
ProgressEvent.loaded: number;
```

#### 6.5.4 total

The total number of bytes of the file that is being read.

##### Signature

```typescript
ProgressEvent.total: number;
```

### 6.6.0 File

This section describes the properties and instance methods of a `File` object. Obtainable by calling [FileEntry.file](#622-file).

Note: While this `File` implements a similar API to the browser's [File](https://developer.mozilla.org/en-US/docs/Web/API/File) API, it is not the same kind of object and is not necessary interchangable.

#### 6.6.1 name

An instance string property that holds the name of the file.

##### Signature

```typescript
File.name: string
```

#### 6.6.2 localURL

An instance string property that holds a DOM-usable url.

##### Signature

```typescript
File.localURL: string
```

#### 6.6.3 type

An instance string property that holds the MIME type if known. Will be `null` otherwise.

##### Signature

```typescript
File.type: string | null
```

#### 6.6.4 lastModified

An instance `Date` property that holds the last modified datetime, if known. Will be `null` otherwise.

##### Signature

```typescript
File.lastModified: Date | null
```

#### 6.6.5 size

An instance number property that holds the size of the file in bytes.

##### Signature

```typescript
File.size: number
```

#### 6.6.6 start

An instance number property that represents the starting byte position of this file slice.

##### Signature

```typescript
File.start: number
```

#### 6.6.7 end

An instance number property that represents the ending byte position of this file slice.

##### Signature

```typescript
File.end: number
```

#### 6.6.8 slice

An instance method to return a new [File](#660-file) instance at the sliced byte positions.

##### Signature

```typescript
File.slice(start?: number, end?: number): File
```

### 6.7.0 FileReader

This section describes the `FileReader` API, used to read [FileEntry](#600-fileentry) objects.

Note that while this API is similar, it is not the same API as the browser's [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) object.

#### 6.7.1 constructor

Constructs a new [FileReader](#670-filereader) instance.

##### Signature

```typescript
new FileReader(file: FileEntry)
```

#### 6.7.2 READ_CHUNK_SIZE

A constant that defines the maximum bytes to read.

##### Signature

```typescript
FileReader.READ_CHUNK_SIZE: number = 262144
```

#### 6.7.3 onloadstart

A callback that will be invoked when loading has began.

##### Signature

```typescript
FileReader.onloadstart: null | (event: ProgressEvent) => void;void;
```

#### 6.7.4 onload

A callback that will be invoked when the file has completely loaded successfully.

##### Signature

```typescript
FileReader.onload: null | (event: ProgressEvent) => void;
```

#### 6.7.5 onloadend

A callback that will be invoked when loading had stopped, regardless of success or failure.

##### Signature

```typescript
FileReader.onloadend: null | (event: ProgressEvent) => void;
```

#### 6.7.6 onprogress

A callback that will be invoked on every load chunk read.

##### Signature

```typescript
FileReader.onprogress: null | (event: ProgressEvent) => void;
```

#### 6.7.7 onerror

A callback that will be invoked when an error has occurred.

##### Signature

```typescript
FileReader.onerror: null | (event: ProgressEvent) => void;
```

#### 6.7.8 onabort

A callback that will be invoked when loading has aborted.

##### Signature

```typescript
FileReader.onabort: null | (event: ProgressEvent) => void;
```

#### 6.7.9 readyState

An instance property that describes the current reader [ReadyState](#680-reader-ready-states).

##### Signature

```typescript
FileReader.readyState: number;
```

#### 6.7.10 error

An instance property that holds the current error state of the reader.

##### Signature

```typescript
FileReader.error: FileError;
```

#### 6.7.11 result

An instance property that holds the read results.
The data type depends on which read type used.

The following methods will produce a `string` result:
- [readAsBinaryString](#6715-readasbinarystring)
- [readAsDataURL](#6714-readasdataurl)
- [readAsText](#6713-readastext)

The following methods will produce an `ArrayBuffer` result:
- [readAsArrayBuffer](#6716-readasarraybuffer)

##### Signature

```typescript
FileReader.result: string | ArrayBuffer;
```

#### 6.7.12 abort

An instance method to abort an active read.

##### Signature

```typescript
FileReader.abort(): void;
```

#### 6.7.13 readAsText

An instance method to read a file as text.
When completed, the `result` will hold the contents of the file as a `string`.

The `encoding` parameter is an optional string as a character set code. For valid character set codes, see [Character Sets](https://www.iana.org/assignments/character-sets/character-sets.xhtml#character-sets-1) specification.

##### Signature

```typescript
FileReader.readAsText(file: File, encoding?: string): void;
```

#### 6.7.14 readAsDataURL

Reads a file as a Data URL form. When finished, the `result` will be a formatted data URL as a `string.`.

The data URL will be in the form of:

    data:[mediaType][;base64],<data>

Where `mediaType` will be the MIME type, if known.
`;base64` may be present depending on the underlying implementation.
`<data>` represents the base64 encoded binary.

##### Signature

```typescript
FileReader.readAsDataURL(file: File): void;
```

#### 6.7.15 readAsBinaryString

Reads a file as a Binary String form. When finished, the `result` will be a formatted data URL as a `string.`.

Note: This method should be avoided as due to JavaScript UTF16 encoding, the contents may not be binary equivilant to the underlying dataset. Use [readAsArrayBuffer](#6716-readasarraybuffer) instead.

##### Signature

```typescript
FileReader.readAsBinaryString(file: File): void;
```

#### 6.7.16 readAsArrayBuffer

Reads a file as an `ArrayBuffer`. When finished, the `result` will be the contents of the file as `ArrayBuffer` type.

##### Signature

```typescript
FileReader.readAsArrayBuffer(file: File): void;
```


### 6.8.0 Reader Ready States

This section describes the [FileReader](#670-filereader) Ready States.

#### 6.8.1 EMPTY

A constant that declares that the reader hasn't began reading yet.

##### Signature

```typescript
FileReader.EMPTY: number = 0
```

#### 6.8.2 LOADING

A constant that declares that the reader is currently reading data.

##### Signature

```typescript
FileReader.LOADING: number = 1
```

#### 6.8.3 DONE

A constant that declares that the reader has finished reading data.

##### Signature

```typescript
FileReader.DONE: number = 2
```
