import { Button, Input, Textarea } from "@material-tailwind/react";
import { PrinterIcon } from '@heroicons/react/24/solid'


function App() {


  return (
    <div className="px-4 sm:px-64">
      <h1 className="text-2xl mt-6 mb-3 font-semibold ">Letterhead</h1>
      <form className="flex flex-col gap-3">
        <Input label="Recipient of letter" type="text" />
        <Input label="Date" type="date" />
        <Input label="Subject" type="text" />
        <Textarea label="Letter Body" />
        <Button fullWidth className="flex justify-center gap-2 items-center"><PrinterIcon className="w-5" />Print</Button>
      </form>
    </div>
  )
}

export default App
