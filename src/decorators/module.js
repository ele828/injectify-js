import Registry from '../registry/registry';

/**
 * @Module() decorator
 * Used for declaring dependencies and metadata when defines a module
 */
export default function Module(metadata) {
  /* eslint-disable */
  return function (targetClass) {
    Registry.registerModule(targetClass, metadata);
    return targetClass;
  };
}
