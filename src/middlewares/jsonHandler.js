export async function jsonHandler(request, response) {
    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }

    try {
        //O método JSON.parse() em JavaScript é usado para converter uma string no formato JSON em um objeto
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader("Content-type", "application/json")
}