/**
 * Usual function for App
 * by kYsLi
 */

export default class {
    /** Fonction de mise en capitale */
    static capitalizeThen = (_value, all) => {
        if(all){
            return _value[0].toUpperCase() + _value.substr(1, _value.length - 1).toLowerCase()
        }else return _value.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }

    /**
     * Fonction de generation de nombre pseudo-aleatoire
     * @param {number} min Nombre minimal
     * @param {number} max Nombre maximal
     * @returns Nombre aleatoire entre min et max
     */
    static getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     * Geénère une chaine de carractères aléatoire
     * @param {number} length longueur de la chaine
     * @param {boolean} full Inclure tout les carractères
     * @param {boolean} number inclure uniquement des chiffres
     * @returns chaine de carractères aleatoire
     */
    static genString = (length, full, number) => {
        let allCar = ''
        let randomString = ''

        if (!full) allCar = !number ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "123456789"
        else allCar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@_-'

        for (let i = 0; i < length; i++) {
            randomString = randomString + allCar[this.getRandomNumber(0, allCar.length - 1)]
        }
        return randomString;
    }

    /**
     * 
     * @param {string} url Lien URL
     * @param {object} _body Données a envoyer
     * @param {'GET' | 'POST'} _method Methode HTTP
     * @returns Promesse de reponse de la réquète en format JSON
     */
    static getDataFromApi = async (url, _body, _method) => {
        const method = _method ?? 'GET'
        const body = _body ?? {}

        const data = {
            method: method,
            body: method !== 'GET' ? JSON.stringify(body) : undefined,
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }

        try {
            const response = await fetch(url, data)
            if(response.ok){
                const json = await response.json()
                return json
            }else{
                throw new Error(response.status)
            }
        } catch (err) {
            throw new Error(err)
        }

        
    }

    /** Fonction d'arrondi */
    static round = (number, offset) => {
        let x = '1'
        for (let i = 0; i < offset; i++) x = x + '0'
        x = parseInt(x, 10)

        return Math.round(x * number) / x
    }


    static timestampDiff = (newTimestamp, oldTimestamp, diffMode ) => {
        const _timestamp = new Date(newTimestamp - oldTimestamp)
        const timestamp = _timestamp.getTime() / 1000

        switch (diffMode) {
            case 'second':
                return timestamp
            case 'minute':
                return Math.trunc(timestamp / 60)
            case 'hour':
                return Math.trunc(timestamp / 3600)
            case 'day':
                return Math.trunc(timestamp / 86400)
            default:
                return timestamp
        }
    }
}
