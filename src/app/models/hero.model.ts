export class Hero {
    constructor(
        public name: string = '',
        public typeOf: string = '',
        public attacks: string = '',
        public power: number,
        public life: number,
        public _id?: string
    ) { }

    setId?() {
        // Implement your own set Id
        var text = '';
        var possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this._id = text;
    }
}

// export interface Hero {
//     name: string,
//     typeOf: string,
//     attacks: string,
//     power: number,
//     life: number,
//     _id?: string
// }