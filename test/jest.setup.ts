import dotenv from "dotenv";
import "isomorphic-unfetch";
import { cleanAll, restore } from "nock";

dotenv.config({ path: ".env.test" });

afterAll(() => {
  cleanAll();
  restore();
});

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();

const observe = jest.fn();
const disconnect = jest.fn();
const unobserve = jest.fn();

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe,
    unobserve,
    disconnect,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
