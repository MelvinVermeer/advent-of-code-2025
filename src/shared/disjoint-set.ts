export class DisjointSet {
  components: number;
  parent: number[];
  size: number[];

  constructor(n: number) {
    this.components = n;
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array.from({ length: n }, () => 1);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a: number, b: number): boolean {
    let rootA = this.find(a);
    let rootB = this.find(b);
    if (rootA === rootB) return false;

    this.parent[rootB] = rootA;
    this.size[rootA] += this.size[rootB];
    this.components--;
    return true;
  }

  /** Returns sizes of all components by collecting sizes at root nodes only. */
  get sizes(): number[] {
    const sizes: number[] = [];
    for (let i = 0; i < this.parent.length; i++) {
      if (this.find(i) === i) sizes.push(this.size[i]);
    }
    return sizes;
  }
}
