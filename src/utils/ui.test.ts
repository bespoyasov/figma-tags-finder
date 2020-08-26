import { Tag } from "../types/tag";
import { assureType } from "./infrastructure";
import {
  parseCategory,
  sortByCategoryAndCount,
  withPreventDefault,
} from "./ui";

describe("utils > ui > parseCategory", () => {
  it("should return a string before the first forward slash and trim it", () => {
    expect(parseCategory(" category/style")).toEqual("category");
  });
});

describe("utils > ui > sortByCategoryAndCount", () => {
  const base: Tag = {
    id: "",
    name: "category/style",
    count: 0,
  };

  it("should sort tags by category first, in alphabet order", () => {
    const a: Tag = { ...base, name: "categoryA/style" };
    const b: Tag = { ...base, name: "categoryB/style" };
    expect(sortByCategoryAndCount(a, b)).toEqual(-1);
  });

  it("should sort tags by count, decreasing, if categories are the same", () => {
    const a: Tag = { ...base, count: 1 };
    const b: Tag = { ...base, count: 2 };
    expect(sortByCategoryAndCount(a, b)).toEqual(1);
  });
});

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
