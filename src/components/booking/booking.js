import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ModalSelector from 'react-native-modal-selector';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible:false,
            modalIsOpened:false,

            chosenType:'',
            chosenDate:'',
            chosenTime:'',
            
        };
        this.showModal = this.showModal.bind(this);

        // Date picker
        this._handleDatePicked = this._handleDatePicked.bind(this);
        this._showDatePicker = this._showDatePicker.bind(this);
        this._hideDatePicker = this._hideDatePicker.bind(this);

        // Time picker
        this._handleTimePicked = this._handleTimePicked.bind(this);
        this._showTimePicker = this._showTimePicker.bind(this);
        this._hideTimePicker = this._hideTimePicker.bind(this);
    }
    showModal(){
        this.setState({
            modalIsOpened:!this.state.modalIsOpened,
        })
    }

    // Date picker
    _handleDatePicked(date){
        this.setState({
            // bookingDate: date.toString().substr(0,15),
            chosenDate: moment(date).format('MMMM Do YYYY')
        })
        this._hideDatePicker();
    };

    _showDatePicker(){
        this.setState({
            isDatePickerVisible:true
        })
    }
    _hideDatePicker(){
        this.setState({
            isDatePickerVisible:false
        })
    }

    // Time picker
    _handleTimePicked(time){
        this.setState({
            // bookingTime: time.toString().substr(16),
            chosenTime: moment(time).format('HH:mm')
        })
        this._hideTimePicker();
    }
    _showTimePicker(){
        this.setState({
            isTimePickerVisible:true
        })
    }
    _hideTimePicker(){
        this.setState({
            isTimePickerVisible:false
        })
    }

    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Please choose either one of them' },
            { key: index++, label: 'Event' },
            { key: index++, label: 'Consultant' },
        ];
        return (
            <View style={styles.container}>
                {/* Type */}
                <ModalSelector
                    data={data}
                    supportedOrientations={['portrait']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({chosenType:option.label})}}
                >

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Choose your type
                        </Text>
                    </TouchableOpacity>

                </ModalSelector>
                <Text style={styles.choosenText}>
                    {this.state.chosenType.length > 0 ? "You have selected "+this.state.chosenType +" type" : null}
                </Text>

                {/* Date */}
                <TouchableOpacity onPress={this._showDatePicker} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Choose your date
                    </Text>
                </TouchableOpacity>
                <DateTimePicker 
                    mode={'date'}
                    // maximumDate='December 31, 2020'
                    // minimumDate={currentDate}
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDatePicker} />
                <Text style={styles.choosenText}>
                    {this.state.chosenDate && this.state.chosenDate.length > 0 ? "You have selected "+this.state.chosenDate : null}
                </Text>

                {/* Time */}
                <TouchableOpacity onPress={this._showTimePicker} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Choose your time
                    </Text>
                </TouchableOpacity>
                <DateTimePicker 
                    mode={'time'}
                    minuteInterval={15}
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideTimePicker} />
                <Text style={styles.choosenText}>
                    {this.state.chosenTime && this.state.chosenTime.length > 0 ? "You have selected "+this.state.chosenTime : null}
                </Text>
                <View style={styles.rowContainer}>
                    <View>
                        <TouchableOpacity style={styles.cancelBtn}>
                            <Text style={styles.btnText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={styles.btnText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        width:250,
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText:{
        fontSize: 20,
    },
    choosenText:{
        marginTop: 10,
        marginBottom: 10,
        color: '#d35400',
        fontSize: 15,
        fontWeight: '700',
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cancelBtn:{
        alignItems: 'center',
        backgroundColor: '#EA2027',
        padding: 20,
        margin: 20,
        width:150,
        justifyContent: 'center',
        borderRadius: 20,
    },
    submitBtn:{
        alignItems: 'center',
        backgroundColor: '#0652DD',
        padding: 20,
        margin: 20,
        width:150,
        justifyContent: 'center',
        borderRadius: 20,
    },
    btnText:{
        color:'#FFF',
        fontSize: 20,
        fontWeight:'700'
    }
})