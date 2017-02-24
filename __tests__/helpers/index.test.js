import * as helpers from '../../app/js/helpers'

describe('Helpers:', () => {
  describe('formatHours', () => {
    const { formatHours } = helpers

    it('should return 12 when hours are 0', () => {
      expect(formatHours(0)).toBe(12)
    })

    it('should return 1 when hours are 13', () => {
      expect(formatHours(13)).toBe(1)
    })
  })

  describe('formatMinutes', () => {
    const { formatMinutes } = helpers

    it('should return 0 when passed 2 minutes and 29 seconds', () => {
      expect(formatMinutes(2, 29)).toBe(0)
    })

    it('should return 5 when passed 2 minutes and 30 seconds', () => {
      expect(formatMinutes(2, 30)).toBe(5)
    })

    it('should return 60 when passed 57 minutes and 30 seconds', () => {
      expect(formatMinutes(57, 30)).toBe(60)
    })
  })

  describe('formatTime', () => {
    const { formatTime } = helpers

    it('should return 12 hours 0 minutes at midnight', () => {
      const expectedObj = {
        hours: 12,
        minutes: 0
      }

      expect(formatTime(0, 0, 0)).toEqual(expectedObj)
    })

    it('should return 1:00 for 1:02:29', () => {
      const expectedObj = {
        hours: 1,
        minutes: 0
      }

      expect(formatTime(1, 2, 29)).toEqual(expectedObj)
    })

    it('should return 1:05 for 1:02:30', () => {
      const expectedObj = {
        hours: 1,
        minutes: 5
      }

      expect(formatTime(1, 2, 30)).toEqual(expectedObj)
    })

    it('should round to next hour when at 57 minutes and 30 seconds', () => {
      const expectedObj = {
        hours: 1,
        minutes: 0
      }

      expect(formatTime(12, 57, 30)).toEqual(expectedObj)
    })

    it('should round to midnight when 11:57:30', () => {
      const expectedObj = {
        hours: 12,
        minutes: 0
      }

      expect(formatTime(11, 57, 30)).toEqual(expectedObj)
    })
  })
})
