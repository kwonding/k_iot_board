package org.example.boardback.exception;

public class FileStorageException extends RuntimeException{
    public FileStorageException(String message) {
        super(message);
    }
    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
    } // e값 때문에 Throwable 필요
}
