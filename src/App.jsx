import { Button, Input, Textarea} from "@material-tailwind/react";
import Doc from "./components/Doc";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useState } from "react";
import Logo from "./assets/logo.png"
import getDayName from "./utils/getDayName";


function App() {

  const [letterData, setLetterData] = useState({})

  const [open, setOpen] = useState(false);


  const generateLetter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData);
    setLetterData(payload)
    setLetterData(prev => ({...prev, day: `${getDayName(new Date(payload.date))}`,}));
    setOpen(true)
  }



  return (
    <div className="px-4 sm:px-64">
      <div className="flex items-center justify-center pt-6">
      <img src={Logo} alt="logo" className="sm:w-1/12 w-3/12" />
      </div>
      <h1 className="text-2xl mt-6 mb-3 font-semibold ">Letterhead</h1>
      <form className="flex flex-col gap-3" onSubmit={generateLetter}>
        <Input label="Recipient of letter" name="recipient" type="text" />
        <Input label="Date" name="date" type="date" />
        <Input label="Subject" name="subject" type="text" />
        <Textarea className="h-64" label="Letter Body" name="body" />
        <Button fullWidth className="flex justify-center gap-2 items-center" type="submit">Write</Button>
      </form>


{open && 
      <PDFDownloadLink document={<Doc data={letterData} />} fileName="connect-letter.pdf">
            {({ blob, url, loading, error }) =>
              loading ? (<Button fullWidth disabled className="mt-2">Loading...</Button>) : (<Button fullWidth className="mt-2 bg-green-500">Download</Button>)
            }
      </PDFDownloadLink>
}

  <PDFViewer className="w-full h-56 rounded-lg mt-4">
    <Doc data={letterData} />
  </PDFViewer>


    </div>

  )
}

export default App
