export default {
    bind(el,binding){
        const startData = {} 
        const handleStartFn = (e) => {
            //console.log(e)  
            const touch = e.changedTouches[0]
            startData.clientX = touch.clientX
            startData.clientY = touch.clientY
            startData.startTime = new Date().getTime()
        }
        const handleEndFn = (e) => {
            e.preventDefault();
            const touch = e.changedTouches[0]
            const offsetX = Math.abs(touch.clientX - startData.clientX)
            const offsetY = Math.abs(touch.clientY - startData.clientY)
            const time = new Date().getTime() - startData.startTime
            if(offsetX < 5 && offsetY <5 && time <150){
                e.target.params.handleFn && e.target.params.handleFn()
            }
        }
        el.params = {handleFn:binding.value}
        el.addEventListener('touchstart',handleStartFn)
        el.addEventListener('touchend',handleEndFn)
        el.unbindEventListener = () => {
            el.removeEventListener('touchstart', handleStartFn)
            el.removeEventListener('touchend', handleEndFn)

        }
    },
    unbind(el){
       el.unbindEventListener && el.unbindEventListener()
    }
}