export default class Service{

    constructor(){
        this._apiBase = 'https://api.giphy.com/v1/';
        this.api_key = 'api_key=D9qSL0PObXXf0KxOyRnSfEV4UMWmVMsQ';
    }

    getResource = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    // GIF 
    getTrendingGif = async () => {
        const res = await this.getResource(`gifs/trending?${this.api_key}&limit=25&rating=g`);
    
        return res.data.map(this._transformGif);
    }

    getSearchGif = async (query) => {
        const res = await this.getResource(`gifs/search?${this.api_key}&q=${query}&limit=25&offset=0&rating=g&lang=ru`);
        console.log('Searh data has been recieved');
        return res.data.map(this._transformGif);
    }

    _transformGif = (res) => {
        return {
            id: res.id,
            title: res.title,
            url: res.images.fixed_height.url
        }
    }

    // STICKER
    getTrendingSticker = async () => {
        const res = await this.getResource(`stickers/trending?${this.api_key}&limit=25&rating=g`);

        return res.data.map(this._transformSticker);
    }

    getSearchSticker = async (query) => {
        const res = await this.getResource(`stickers/search?${this.api_key}&q=${query}&limit=25&rating=g&lang=ru`);

        return res.data.map(this._transformSticker);
    }

    _transformSticker = (res) => {
        return {
            id: res.id,
            title: res.title,
            url: res.images.fixed_height.url
        }
    }
}

