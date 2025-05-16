'use client'

import { useState } from "react"
import JabCardDetails from "./JabCardDetails"

function JobDetailsOverlay() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (showDetails && <JabCardDetails />)
}

export default JobDetailsOverlay