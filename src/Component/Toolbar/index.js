import React from 'react';
import Button from '../General/Button'

const Toolbar = () => {
    return (
        <div className=' bg-amber-600 flex flex-row justify-end w-screen h-10'>
            <Button>Нэвтрэх</Button>
            {/* <Button>Бүртгүүлэх</Button> */}
        </div>
    )
}

export default Toolbar