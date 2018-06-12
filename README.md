# mono-error

Provide a way to add context to Errors by including metadata and wrapping errors

## DetailedError

DetailedError is an Error that includes a details object, which defaults to having the stack as a property.

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

The details on the error is a simple object that is easy to log via analytics or a logger like winston.
The 'stack' property on details should get picked up by winston transports for rollbar or stackdriver

```
try {
    `...`
} catch (err) {
    if (err instanceof DetailedError) {
        winston.error(err.msg, err.details)
    }
}
```