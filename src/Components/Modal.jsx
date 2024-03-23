import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button';

const Modal= forwardRef (function Modal({children, buttonCaption},ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return{
        open() {
            if (dialog.current) {
                dialog.current.showModal();
              } else {
                console.error('Dialog is not initialized');
              }
        

        }
    }
  })
    return createPortal (
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
        {children}
        <form action="" method="dialog" className='mt-4 text-right'>
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>,
      document.getElementById('modal-root')
  )
})

export default Modal