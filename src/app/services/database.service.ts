import { Injectable, } from '@angular/core';
import { StoredData } from '../models/idb';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private db!: IDBDatabase
    private id!: number

    constructor() {
        const request = indexedDB.open('saved')

        request.onupgradeneeded = (event: any) => {
            this.db = event.target.result;
            this.createObjectStore();
        }
        request.onsuccess = (event: any) => {
            this.db = event.target.result
        }
    }


    save(from_data: string, to_data: string, quantity_data: string, value_data: string, onlyOne: string) {
        const request = indexedDB.open('saved')
        request.onsuccess = (event: any) => {
            this.db = event.target.result

            const objectStore = this.db.transaction('saved', 'readwrite').objectStore('saved')
            const newItem = { from: from_data, to: to_data, quantity: quantity_data, value: value_data, one: onlyOne }
            const requestAdd = objectStore.add(newItem)
            requestAdd.onsuccess = (event: any) => {
                this.id = event.target.result
                this.db = event.target.result
                console.log('added');
            }
        }
    }

    delete(id: number) {
        const request = indexedDB.open('saved')
        request.onsuccess = (event: any) => {
            this.db = event.target.result

            const objectStore = this.db.transaction('saved', 'readwrite').objectStore('saved')
            const requestDel = objectStore.delete(id)
            requestDel.onsuccess = (event: any) => {
                this.db = event.target.result
                console.log('deleted');
                window.location.reload()
            }
        }
    }

    undo() {
        const request = indexedDB.open('saved')
        request.onsuccess = (event: any) => {
            this.db = event.target.result

            const objectStore = this.db.transaction('saved', 'readwrite').objectStore('saved')
            const requestDel = objectStore.delete(this.id)
            requestDel.onsuccess = (event: any) => {
                this.db = event.target.result
                console.log('deleted');
            }
        }
    }

    getAllData(): any {
        const request = indexedDB.open('saved')

        let items: StoredData[] = []

        request.onsuccess = (event: any) => {
            this.db = event.target.result

            const objectStore = this.db.transaction('saved', 'readwrite').objectStore('saved')
            const query = objectStore.getAll()
            query.onsuccess = (event: any) => {
                objectStore.openCursor().onsuccess = (event: any) => {
                    const cursor = event.target.result
                    if (cursor) {
                        items.push(cursor.value)
                        cursor.continue()
                    }
                }
            }
        }
        return items
    }

    private createObjectStore() {
        const objectStore =
            this.db.createObjectStore('saved', {
                keyPath: 'id',
                autoIncrement: true,
            });
    }
}
