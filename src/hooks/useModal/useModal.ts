import { useState } from "react"


 const useModal = () =>{
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handelModalClose = () =>{
        setIsOpen(false)
    }
    const handelModalOpen= () =>{
        setIsOpen(true)
    }

    return {isOpen, handelModalClose, handelModalOpen}
}


export default useModal