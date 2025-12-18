// LIFO - Last In First Out
export class Stack<T> {
    private readonly _items: T[] = [];

    constructor(items: T[] = []) {
        this._items = [...items];
    }

    add(item: T) {
        this._items.push(item);
    }

    pop(): T | undefined {
        return this._items.pop();
    }

    getBottom(): T | undefined {
        return this._items[0];
    }

    getTop(): T | undefined {
        return this._items[this._items.length - 1];
    }

    getByIndex(index: number): T | undefined {
        return this._items[index];
    }

    getLength(): number {
        return this._items.length;
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    getStack(): T[] {
        return this._items
    }

    sum(): number {
        return this._items.reduce((acc: number, item: T) => acc + Number(item), 0);
    }

    toString(): string {
        return this._items.join('');
    }
}