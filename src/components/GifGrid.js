import React,{Fragment} from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images,loading}=useFetchGifs(category);
    
    // const [images, setImages] = useState([]);


    // ///evita que se ejecute el getGifs infinitas veces
    // useEffect(()=>{
    //     getGifs(category)
    //         .then(imgs=>setImages(imgs));
    // },[category]);
    ///agrego category ahi arriba xq puede ser que llegue a cambiar y me tira warningn


    //getGifs();

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash"> loading </p>}
            <div className="card-grid">
                <h3>{}</h3>
                {
                    images.map(img=>{
                        return <GifGridItem 
                        key={img.id}
                        {...img}/>
                        })
                    }
            </div>
        </Fragment>

    )
}
