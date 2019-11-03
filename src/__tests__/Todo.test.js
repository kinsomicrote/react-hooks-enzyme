import React from "react";
import { shallow, mount } from "enzyme";
import Todo from "../Todo";

describe("Todo", () => {
  it("renders", () => {
    shallow(<Todo />);
  });

  it("displays initial to-dos", () => {
    const wrapper = mount(<Todo />);
    expect(wrapper.find("li")).toHaveLength(2);
  });

  it("adds a new item", () => {
    const wrapper = mount(<Todo />);
    wrapper.find("input").instance().value = "Fix failing test";
    expect(wrapper.find("input").instance().value).toEqual("Fix failing test");
    wrapper.find('[type="submit"]').simulate("click");
    expect(wrapper.find("li")).toHaveLength(3);
    expect(
      wrapper
        .find("li div span")
        .last()
        .text()
    ).toEqual("Fix failing test");
  });

  it("removes an item", () => {
    const wrapper = mount(<Todo />);
    wrapper
      .find("li button")
      .first()
      .simulate("click");
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li span").map(item => item.text())).toEqual([
      "Take out the trash"
    ]);
  });
});
