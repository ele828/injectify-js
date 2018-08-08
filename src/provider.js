export class Provider {
  constructor(token, isPrivate) {
    this.token = token;
    // Provider instance reference
    this.instance = null;
    this.private = isPrivate || false;
  }

  setInstance(instance) {
    this.instance = instance;
  }

  getInstance() {
    return this.instance;
  }

  resolved() {
    return this.instance !== null;
  }
}

export class ClassProvider extends Provider {
  constructor(token, klass, deps, isPrivate) {
    super(token, isPrivate);
    this.klass = klass;
    this.deps = deps;
  }
}

export class ExistingProvider extends Provider {
  constructor(token, useExisting, isPrivate) {
    super(token, isPrivate);
    this.useExisting = useExisting || '';
  }
}

export class FactoryProvider extends Provider {
  constructor(token, func, deps, isPrivate) {
    super(token, isPrivate);
    this.func = func;
    this.deps = deps || [];
  }
}

export class ValueProvider extends Provider {
  constructor(token, value, isPrivate) {
    super(token, isPrivate);
    this.value = value;
    this.setInstance(value);
  }
}
