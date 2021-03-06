export const SPEC_URL =
  'https://github.com/jaydenseric/graphql-multipart-request-spec'

export class UploadError extends Error {
  constructor(message, status) {
    super(message)

    this.name = this.constructor.name

    if (typeof Error.captureStackTrace === 'function')
      Error.captureStackTrace(this, this.constructor)
    else this.stack = new Error(message).stack

    if (status) {
      this.status = status
      this.expose = true
    }
  }
}

export class MaxFileSizeUploadError extends UploadError {}
export class MaxFilesUploadError extends UploadError {}
export class MapBeforeOperationsUploadError extends UploadError {}
export class FilesBeforeMapUploadError extends UploadError {}
export class FileMissingUploadError extends UploadError {}
export class UploadPromiseDisconnectUploadError extends UploadError {}
export class FileStreamDisconnectUploadError extends UploadError {}
