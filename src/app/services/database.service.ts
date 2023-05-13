import { Injectable, } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private db!: IDBDatabase
    private id!: number

    constructor() { }


    save(from_data: string, to_data: string, quantity_data: string, value_data: string, onlyOne:string) {
        const request = indexedDB.open('saved')

        request.onupgradeneeded = (event: any) => {
            this.db = event.target.result;
            this.createObjectStore();
        }
        request.onsuccess = (event: any) => {
            this.db = event.target.result
            const objectStore = this.db.transaction('saved', 'readwrite').objectStore('saved')
            const newItem = { from: from_data, to: to_data, quantity: quantity_data, value: value_data, one: onlyOne }
            const requestAdd = objectStore.add(newItem)

            requestAdd.onsuccess = (addevent: any) => {
                this.id = addevent.target.result
            }
        }
    }

    undo() {
        const request = indexedDB.open('saved')

        request.onupgradeneeded = (event: any) => {
            this.db = event.target.result;
            this.createObjectStore();
        }
        request.onsuccess = (event: any) => {
            this.db = event.target.result
            const objectStore = this.db.transaction('saved', 'readwrite').objectStore('saved')
            objectStore.delete(this.id)
        }

    }

    private createObjectStore() {
        const objectStore =
            this.db.createObjectStore('saved', {
                keyPath: 'id',
                autoIncrement: true,
            });
    }
}
