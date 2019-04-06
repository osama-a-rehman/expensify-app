const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Should show greeting", () => {
  const greeting = generateGreeting("Umair");
  expect(greeting).toBe("Hello Umair!");
});

test("Should show greeting for no name", () => {
  const greeting = generateGreeting();
  expect(greeting).toBe("Hello Anonymous!");
});
