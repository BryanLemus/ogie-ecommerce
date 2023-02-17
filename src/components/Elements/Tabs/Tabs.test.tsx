import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Tab, Tabs } from "@/components";

describe("Tabs", () => {
  afterEach(() => cleanup());

  it("should be render", () => {
    render(
      <Tabs>
        <Tab value={0}>Tab1</Tab>
        <Tab value={1}>Tab2</Tab>
        <Tab value={2}>Tab3</Tab>
      </Tabs>
    );
  });

  it("should be select tab", () => {
    let currentValue: number = 0;

    // Render tabs
    render(
      <Tabs
        onChange={(value) => {
          currentValue = value as number;
        }}
      >
        <Tab value={0}>tab1</Tab>
        <Tab value={1}>tab2</Tab>
      </Tabs>
    );

    // Select tab2
    const tab2 = screen.getByText("tab2");
    fireEvent.click(tab2);
    expect(currentValue).toEqual(1);

    // Select tab1
    const tab1 = screen.getByText("tab1");
    fireEvent.click(tab1);
    expect(currentValue).toEqual(0);
  });
});
