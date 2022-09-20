import Components from '../components';
import Explores from '../explores';

export default function LeftDrawer(params) {

    return (
        <div className='flex' >
            <Explores/>
            <Components/>
        </div>
    )
}