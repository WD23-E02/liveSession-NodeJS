export function validationResponse(req, res) {
  res.send({ message: "This user looks valid!" })
}

export function sanitizationResponse(req, res) {
  res.send(req.body)
}
