# mono-error

Error classes for creating an error with metadata, and adding metadata to existing errors.

## DetailedError

```
function updateLocation(x: int, y: int) {
    throw new DetailedError('failed to do stuff', { x, y });
}
```



## WrappedError

WrappedError can be used to wrap any error with additional metadata to be re-thrown. It extends DetailedError.
These errors preserve the original stack, and adds a 'caused by' message to the error, similar to chaining Exceptions in Java.

```
function doStuff(id: int) {
    try {
        `...`
    } catch (err) {
        throw new WrappedError(err, 'failed to do stuff', { id });
    }
}

```

## Error Details

The details interface enforces that details are simple to make it easier to send reasonable data to logging or analytics.
Allowing nested objects or arrays in the details field makes it complicated to dig through, and also opens the possibility for
loops. 

```
try {
    `...`
} catch (err) {
    if (err instanceof DetailedError) {
        winston.error(err.msg, err.details)
    }
}
```