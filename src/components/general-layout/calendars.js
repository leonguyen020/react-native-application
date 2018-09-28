import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import ActionButton from 'react-native-action-button';
import moment from 'moment';
// import BookingPage from '../booking/booking';

var {width,height} = Dimensions.get('screen');

export default class CalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let currentDate = moment().format("YYYY-MM-DD");
    var {navigate} = this.props.navigation;
    return (
      <View>
        
        <View style={styles.agendaTextContainer}>
          <Text style={styles.agendaText}>
            Agenda
          </Text>
        </View>

        <Calendar
          markedDates={{
            '2018-09-30': {selected: true, marked: true, selectedColor: 'blue'},
            '2018-10-01': {marked: true},
            '2018-10-15': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2018-10-20': {disabled: true, disableTouchEvent: true}
          }}
          // Initially visible month. Default = Date()
          current={currentDate}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={currentDate}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2020-10-01'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
        <ActionButton
          style={styles.actionBtn}
          // position="left"
          buttonColor="rgba(231,76,60,1)"
          onPress={()=>navigate("BookingPage")}
        />
        {/* <Button
          title="Book appointment"
          onPress={()=>navigate("BookingPage")}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  agendaTextContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent:'center'
  },
  agendaText:{
    // flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    width:160,
    textAlign:'center',
    // opacity:0.9
  },
  actionBtn:{
    position:'absolute',
    top:height/1.45,
    right:0
  }
})
