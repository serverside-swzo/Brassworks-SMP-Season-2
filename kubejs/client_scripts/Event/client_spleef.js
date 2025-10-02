NetworkEvents.dataReceived("spleef.motionrequest", (event) => {
    let motion = event.player.self().getDeltaMovement()
    event.getPlayer().sendData("spleef.motionresponse",
        {
            x: motion.x(),
            y: motion.y(),
            z: motion.z()
        }
    )
})