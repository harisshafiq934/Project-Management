import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

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
        <dialog ref={dialog}>
        {children}
        <form action="" method="dialog">
          <button>{buttonCaption}</button>
        </form>
      </dialog>,
      document.getElementById('modal-root')
  )
})

export default Modal