export const testingQA = [
  {
    keywords: ["unit testing"],
    answer: `Unit testing means testing small individual parts of the application like functions or components. The goal is to make sure each unit works correctly in isolation. It helps catch bugs early and improves code quality.`,
  },
  {
    keywords: ["unit testing", "unit", "jest"],
    answer: `Unit testing means testing small individual parts of the application like functions or components. I have used Jest and React Testing Library for unit testing in React applications. Jest is used as test runner and assertion library. React Testing Library is used to test components from user perspective.`,
  },
  {
    keywords: ["enzyme"],
    answer: `React Testing Library focuses on testing behavior instead of implementation. It encourages testing like how a user interacts with the application. Enzyme allows testing internal state, but RTL promotes better testing practices.`,
  },
  {
    keywords: ["getby", "queryby", "findby"],
    answer: `These are methods from React Testing Library used to find elements in the DOM while testing. getBy is used when the element should already be present on the screen. If found → test passes. If NOT found → throws error. queryBy is used when the element might or might not be present. If found → returns the element. If NOT found → returns null. findBy is used for async elements (elements that appear later). If appears → test passes. If does not appear after some time → test fails.`,
  },
  {
    keywords: ["mockapi"],
    answer: `For API calls, I mock the API using jest.mock or mock functions. I simulate success and failure responses. Then I test loading state, success UI, and error UI separately.`,
  },
  {
    keywords: ["mocking"],
    answer: `Mocking means replacing real implementation with fake one for testing. For example, instead of calling real API, we mock the response. It makes tests faster and independent from external systems.`,
  },
  {
    keywords: ["coverage"],
    answer: `Code coverage shows how much of the code is covered by tests. It includes statements, branches, functions, and lines coverage. Higher coverage means better confidence but 100% is not always required.`,
  },
  {
    keywords: ["testing", "jest", "rtl"],
    answer: `Testing is like checking the brakes of a car before you go for a drive. Jest is the runner—it checks the logic (is 2 + 2 really 4?). React Testing Library (RTL) is the user—it checks if the user can actually see the "Submit" button and click it. We write tests so that when we change code later, we don't accidentally break old features.`,
  },
];
