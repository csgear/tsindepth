describe("spec/SimpleJasmine.spec.ts", () => {
  it("should fail", () => {
    let undefinedValue = "name";
    expect(undefinedValue).toBeDefined("should be defined");
  });
});
