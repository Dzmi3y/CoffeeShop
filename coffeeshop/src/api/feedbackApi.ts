import feedbackData from '../data/feedbackData.json'
import { FeedbackInfo } from '../model/FeedbackInfo'

const getFeedback = (): FeedbackInfo[] => {
    return feedbackData as FeedbackInfo[]
}

export default getFeedback
