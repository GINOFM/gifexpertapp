import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs=(category)=>{

    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    ///.then es xq es una promesa, pero no puedo poner async
    useEffect(()=>{

        getGifs(category)
            .then(imgs=>{
                console.log(imgs);
                setstate({
                    data:imgs,
                    loading:false
                })

            })

    },[category]);

    return state;//data[] y loading
}