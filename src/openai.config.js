import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
    apiKey : "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"
  })

const openai = new OpenAIApi(config)

export default openai