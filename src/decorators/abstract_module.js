import Registry from '../registry/registry';

/**
 * @AbstractModule() decorator
 * Used for declaring dependencies and metadata when defines a abstract module.
 */
export default function AbstractModule(metadata) {
  /* eslint-disable */
  return function(targetClass) {
    Registry.registerModule(targetClass, metadata);
    return targetClass;
  };
}
