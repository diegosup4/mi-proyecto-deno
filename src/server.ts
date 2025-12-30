export function createServer() {
  return {
    port: 8000,
    start() {
      console.log(`Server running on http://localhost:${this.port}`);
    }
  };
}

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}