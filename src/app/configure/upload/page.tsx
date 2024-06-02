"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import DropZone, { FileRejection} from "react-dropzone"
 
export default function Upload(){
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  
  const onDropRejected = () => {}

  const onDropAccepted = () => {}

  return(
    <div className={  
      cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {"ring-blue-900/25  bg-blue-900/10": isDragOver,}
      )}>
        <div className="relative flex flex-1 flex-col items-center w-full ">
          <DropZone 
            onDropRejected={onDropRejected}
            onDropAccepted={onDropAccepted}
            accept={{
              "image/png": [".png"],
              "image/jpeg": [".jpeg"],
              "image/jpg": [".jpg"],
            }}
            onDragEnter={()=> setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
            >
              {
                ({getRootProps, getInputProps}) => (
                  <div className="h-full w-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}>
                    <input {...getInputProps()} />
                  </div>
                )
              }
          </DropZone>
        </div>
      </div>
  )
}