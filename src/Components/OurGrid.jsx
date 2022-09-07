import PropTypes from 'prop-types';

import { OurItems } from '../____components____/OurItems';
import { useFetchGifs } from '../___hooks___/useFetchGifs';



export const OurGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/*<LoadingMessage isLoading ={isLoading}  *otra forma de hacer lo del cargando* */}
            {
                isLoading && (<h2>Cargando...</h2>)

            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <OurItems
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

OurGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
