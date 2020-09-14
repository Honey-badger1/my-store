export default class StoreService{
    _apiBase = 'https://my-json-server.typicode.com/Honey-badger1/StoreApi/';

     getResource=async(url)=> {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

     getMenuItems=async()=> {
        return await this.getResource('/menu/');
    }

    setOrder=async(order)=> {
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }
        const response = await fetch(`${this._apiBase}/cart`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
    
        }
        )
        return await response.json()
       
    }

     getOrderNumber=async()=>{
        const res = await this.getResource('/cart/');
        const orderNumber = res.length+1;

        return orderNumber
    }

   

    
}