import { Button, Input, Textarea, Dialog, Typography, DialogBody, DialogFooter ,Spinner } from "@material-tailwind/react";
import Doc from "./components/Doc";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from "react";
import ChefGif from "./assets/chef.gif"
import Logo from "./assets/logo.png"


function App() {

  const [letterData, setLetterData] = useState({})

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const generateLetter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData);
    setLetterData(payload)
    handleOpen()
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

      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="grid place-items-center gap-4">
          <img className="rounded-lg" src={ChefGif} alt="chefgif" />
          <Typography className="text-center font-normal">
            Your letter has been cooked to perfection
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <PDFDownloadLink document={<Doc data={letterData} />} fileName="connect-letter.pdf">
            {({ blob, url, loading, error }) =>
              loading ? (<Spinner />) : (<Button fullWidth className="flex justify-center gap-2 items-center">Download</Button>)
            }
          </PDFDownloadLink>
        </DialogFooter>
      </Dialog>


      <PDFDownloadLink document={<Doc data={letterData} />} fileName="connect-letter.pdf">
            {({ blob, url, loading, error }) =>
              loading ? (<Spinner />) : (<Button fullWidth className="flex justify-center gap-2 items-center">Download</Button>)
            }
          </PDFDownloadLink>
    </div>
  )
}

export default App
