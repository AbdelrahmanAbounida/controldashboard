import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Container, Stack } from '@mui/material';
import { useState, useEffect } from 'react'
import { Joystick } from 'react-joystick-component';

const ControlPanel = () => {
  const rosConnectionState = useSelector((state) => state.RosConnection)

  const [direction, setdirection] = useState("stop");

  const [cmd_vel,setcmd_vel] = useState()
  const [vel,setVel] = useState({
    linear:{
      x:0,
      y:0,
      z:0
    },
    angular:{
      x:0,
      y:0,
      z:0
    }
  })
  const handleBotConnection = () => {
    if(rosConnectionState.ros && rosConnectionState.ros.isConnected && !cmd_vel){
      setcmd_vel(new window.ROSLIB.Topic({
        ros: rosConnectionState.ros,
        name:"/turtle1/cmd_vel",
        messageType:"geometry_msgs/Twist"
      }))
    }
  }


  const handleMove = (event)=>{

    setVel({
      linear:{
        x:event.y/30,
        y:0,
        z:0
      },
      angular:{
        x:0,
        y:0,
        z:-event.x/80
      }
    })

    handleBotConnection();

    var twist = new window.ROSLIB.Message(
        vel
      )

    cmd_vel?.publish(twist);

  }



  const changeSpeedWithDirection = (direction)=>{
    
  switch(direction){
      case 'forward': 
      return { linear:{ x:2,y:0,z:0},
              angular:{x:0,y:0,z:0}}
      case 'backward': 
      return { linear:{ x:-2,y:0,z:0},
              angular:{x:0,y:0,z:0}}

      case 'right': 
      return { linear:{ x:0,y:0,z:0},
              angular:{x:0,y:0,z:-1}}

      case 'left': 
      return { linear:{ x:0,y:0,z:0},
              angular:{x:0,y:0,z:1}}

      case 'stop': 
      return { linear:{ x:0,y:0,z:0},
              angular:{x:0,y:0,z:0}}
      default : 
      return { linear:{ x:0,y:0,z:0},
              angular:{x:0,y:0,z:0}}
}

}

const Move = (direction)=>{

  setVel(changeSpeedWithDirection(direction))

  console.log(vel)
  handleBotConnection();

  var twist = new window.ROSLIB.Message(
      vel
    )

  cmd_vel?.publish(twist);
}


const handleStop = ()=>{
    setdirection('stop')
  }

  useEffect(() => {
    if(! rosConnectionState.ros){
      setcmd_vel(null)
    }

  }, [rosConnectionState.ros]);

  useEffect(() => {
    console.log(direction)
   if(direction === "stop"){
    Move("stop")
   }
   else{
    while(rosConnectionState.ros){
      Move(direction)
    }
   }
  }, [direction]);

  const buttonStyles = {
            color:"#fff",
            backgroundColor:"#25292a",
            height:30,
            width:190,
            fontSize:20,
            px:5,
            py:3.5,
            m:2,
            fontWeight:"bold",
            borderRadius:2
  }

    return (
      <>
        <Container sx={{justifyContent:"center",display:"flex"}}>

            <Box sx={{mt:15}}>

                  <Button variant="contained" sx={buttonStyles} onClick={()=> setdirection('forward')}>Forward</Button>

                  <Stack direction="row" gap={3} sx={{alignItems:"center",my:2}}>

                        <Button variant="contained" sx={buttonStyles} onClick={()=> setdirection('left')}>Left</Button>

                        <Joystick  
                          size={350} 
                          sticky={false} 
                          baseColor="#25292a" 
                          stickColor="lightseagreen" 
                          throttle={100}
                          move={handleMove} 
                          stop={handleStop}
                      >
                      </Joystick>

                      <Button variant="contained" sx={buttonStyles} onClick={()=> setdirection('right')}>Right</Button>

                  </Stack>

                  <Button variant="contained" sx={buttonStyles} onClick={()=> setdirection('backward')}>Backward</Button>

            </Box>
        </Container>
        <Button variant='contained' sx={{backgroundColor:"error.main",color:"#fff",mt:3,px:17,py:3,fontSize:23,fontWeight:"bold"}} onClick={()=>handleStop()}>Stop</Button>
  
      </>
  
    )
}

export default ControlPanel
