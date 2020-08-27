import { withPreventDefault } from "./withPreventDefault";
import { assureType } from "../infrastructure";

describe("utils > ui > withPreventDefault", () => {
  it("should return a function that takes an event as an argument", () => {
    const caller = withPreventDefault(() => {});
    expect(typeof caller).toEqual("function");
  });

  it("should prevent default behavior on an event", () => {
    const preventDefault = jest.fn();
    const eventStub = assureType<React.SyntheticEvent>({ preventDefault });
    const caller = withPreventDefault(() => {});
    caller(eventStub);
    expect(preventDefault).toHaveBeenCalled();
  });

  it("should call a given function with all the arguments given at start and an event", () => {
    const mock = jest.fn();
    const eventStub = assureType<React.SyntheticEvent>({ preventDefault() {} });
    const caller = withPreventDefault(mock, 1, 2, 3);
    caller(eventStub);
    expect(mock).toHaveBeenCalledWith(1, 2, 3, eventStub);
  });
});
