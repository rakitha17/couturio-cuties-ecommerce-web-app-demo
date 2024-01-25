import * as React from "react"
//LINK - packages
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function FilterChip({ title, type, removeChip }) {
  const handleDelete = () => {
    removeChip(type)
  }

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={title}
        onDelete={handleDelete}
        style={{ fontFamily: "DM Sans" }}
      />
    </Stack>
  )
}
