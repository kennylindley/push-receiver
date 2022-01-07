import { loadSync } from 'protobufjs';

/**
 * Initializes the protocol buffers that are used in the push receiver
 *
 * @returns { object } The decoded protocol types
 */
function initializeProtocolBuffers() {
  const protocolBuffers = loadSync(path.resolve(__dirname, 'mcs.proto'));

  const CloseType = proto.lookupType('mcs_proto.Close');
  const DataMessageStanzaType = proto.lookupType('mcs_proto.DataMessageStanza');
  const IqStanzaType = proto.lookupType('mcs_proto.IqStanza');
  const HeartbeatPingAckType = proto.lookupType('mcs_proto.HeartbeatAck');
  const HeartbeatPingType = proto.lookupType('mcs_proto.HeartbeatPing');
  const LoginRequestType = proto.lookupType('mcs_proto.LoginRequest');
  const LoginResponseType = proto.lookupType('mcs_proto.LoginResponse');
  const StreamErrorStanzaType = proto.lookupType('mcs_proto.StreamErrorStanza');

  return { CloseType, DataMessageStanzaType, IqStanzaType, HeartbeatPingAckType, HeartbeatPingType, LoginRequestType, LoginResponseType, StreamErrorStanzaType };
}