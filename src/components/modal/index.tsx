import { useCallback, useState } from 'react';
import Modal from 'react-modal';

import clsx from 'clsx';
import Button from '../button';
import { Poppins } from 'next/font/google';
import { CloseCircle, CloseSquare } from 'iconsax-react';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

interface Props {
  isOpen:boolean;
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
  contentClassName?:string;
  overlayClassName?:string;
  showFooter?: boolean;
  showTitle?: boolean;
  onConfirm?:()=>void;
  withConfirm?: boolean;
  confirmText?: string;
  closeText?:string;
  onClose?:()=>void;
  title?: string;
  children?: any;
}

export default function BaseModal({
  isOpen,
  setIsOpen,
  contentClassName,
  overlayClassName,
  showFooter = true,
  showTitle = true,
  withConfirm = false,
  confirmText = 'Confirm',
  closeText = 'Close',
  onClose,
  onConfirm,
  title = 'Modal',
  children,
}:Props) {

  const onOpenModal = useCallback(()=>{
    setIsOpen(true);
  },[])

  const onCloseModal = useCallback(()=>{
    setIsOpen(false);

    if (onClose) {
      onClose()
    }
  },[onClose])

  return(
    <Modal
      isOpen={isOpen}
      onAfterOpen={onOpenModal}
      onRequestClose={onCloseModal}
      className={clsx([
        "absolute top-0 right-0 bottom-0 text-white bg-fill-100 min-w-[40vw] max-w-[50vw] p-4 transition-all",
        poppins.className,
        contentClassName,
      ])}
      overlayClassName={clsx("fixed top-0 left-0 z-[1000] h-full w-full bg-black/50 flex justify-center align-center",overlayClassName)}
    >
      <div className="flex flex-col justify-between h-[100%]">
        {
          showTitle &&
          <div className="pb-2 border-b border-fill-500 mb-4 flex justify-between items-center">
            <h1 className='text-2xl font-semibold' >{title}</h1>
            <button
              onClick={onCloseModal}
            >
              <CloseCircle className='text-slate-500 text-xl'/>
            </button>
          </div>
        }
        <div className="flex-1 overflow-y-scroll no-scrollbar">
          {children}
        </div>
        {
          showFooter &&
          <div className="flex justify-end gap-4 pt-4 mt-4 border-t border-fill-500 ">
            <Button
              labelClassName='text-white'
              className='bg-slate-500 border-slate-500 hover:bg-slate-500/80'
              label={closeText}
              onClick={onCloseModal}
            />
            {
              withConfirm &&
              <Button
                labelClassName='text-white'
                label={confirmText}
                size='md'
                onClick={()=>onConfirm?.()}
              />
            }
          </div>
        }
      </div>
    </Modal>
  )
}