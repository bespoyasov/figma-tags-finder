import { lazy } from "./lazy";

describe("utils > ui > lazy", () => {
  it("should return a function", () => {
    const deferredCall = lazy(() => {});
    expect(typeof deferredCall).toEqual("function");
  });

  it("should call a given function with all the arguments given at start when called deferred caller", () => {
    const mock = jest.fn();
    const deferredCall = lazy(mock, 1, 2, 3);
    deferredCall();
    expect(mock).toHaveBeenCalledWith(1, 2, 3);
  });
});
